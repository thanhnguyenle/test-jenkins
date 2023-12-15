import os, re

def convert_mysql_to_postgres(input_file, output_file):
    # Drop and recreate the 'public' schema
    postgres_setup_sql = """
DROP SCHEMA IF EXISTS public CASCADE;
CREATE SCHEMA public;
"""
    with open(input_file, 'r', encoding='utf-8') as mysql_file:
        mysql_sql = mysql_file.read()
    
    # Convert MySQL-specific syntax to PostgreSQL-compatible syntax
    postgres_sql = re.sub(r'INT NOT NULL AUTO_INCREMENT', 'SERIAL NOT NULL', mysql_sql)
    postgres_sql = re.sub(r'VARCHAR\((\d+)\)', r'VARCHAR(\1)', postgres_sql)
    postgres_sql = re.sub(r'NVARCHAR\((\d+)\)', r'VARCHAR(\1)', postgres_sql)
    postgres_sql = re.sub(r'DATETIME', 'TIMESTAMP', postgres_sql)
    # postgres_sql = re.sub(r'CREATE TABLE (\w+)', r'CREATE TABLE public.\1', postgres_sql)
    # postgres_sql = re.sub(r'ALTER TABLE (\w+)', r'ALTER TABLE public.\1', postgres_sql)
    # postgres_sql = re.sub(r'ALTER TABLE (\w+)', r'ALTER TABLE public.\1', postgres_sql)
    # postgres_sql = re.sub(r'REFERENCES (\w+)', r'REFERENCES public.\1', postgres_sql)
    postgres_sql = postgres_sql.replace('TINYINT', 'SMALLINT')
    postgres_sql = postgres_sql.replace('PRIMARY KEY(id)', 'PRIMARY KEY (id)')
    
    # Change function set owner
    database_name = re.findall(r'USE(.*?);', postgres_sql)
    postgres_sql = postgres_sql.replace('USE', 'SET search_path TO')
    postgres_sql = postgres_sql.replace(str(database_name[0]).strip(), str(database_name[0]).strip().lower())
    
    # # # Find all CREATE TABLE statements in the public schema
    create_table_matches = re.finditer(r'CREATE TABLE (\w+)', postgres_sql)

    # # # Iterate through each table and add schema to table name
    for match in create_table_matches:
        table_name = match.group(1)
        table_name_with_schema = f'public.{table_name}'
        # postgres_sql = postgres_sql.replace(table_name, table_name_with_schema)
        postgres_sql = re.sub(rf'\b{table_name}\b', table_name_with_schema, postgres_sql)
    
    # Combine the setup SQL and the converted SQL
    final_sql = postgres_setup_sql + postgres_sql 
    
    with open(output_file, 'w', encoding='utf-8') as postgres_file:
        postgres_file.write(final_sql)

# Example usage
mysql_file = os.path.join(os.path.dirname(__file__), 'coffeemaneger.sql')
postgre_file = os.path.join(os.path.dirname(__file__), 'coffeemanager-postgre.sql')

convert_mysql_to_postgres(mysql_file, postgre_file)