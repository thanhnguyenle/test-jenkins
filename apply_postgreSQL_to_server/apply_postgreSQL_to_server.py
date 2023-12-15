#!/usr/bin/python
from argparse import ArgumentParser
from configparser import ConfigParser
import os
import psycopg2


def config(filename='database.ini', section='postgresql'):
    # create a parser
    parser = ConfigParser()
    # read config file
    parser.read(filename)

    # get section, default to postgresql
    db = {}
    if parser.has_section(section):
        params = parser.items(section)
        for param in params:
            db[param[0]] = param[1]
    else:
        raise Exception('Section {0} not found in the {1} file'.format(section, filename))

    return db

def connect():
    """ Connect to the PostgreSQL database server """
    conn = None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
		
        # create a cursor
        cur = conn.cursor()
        
	# execute a statement
        print('PostgreSQL database version:')
        cur.execute('SELECT * FROM public.users')

        # display the PostgreSQL database server version
        db_version = cur.fetchone()
        print(db_version)
       
	# close the communication with the PostgreSQL
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

def apply_sql(sql_content:str):
    conn = None
    try:
        # read connection parameters
        params = config()

        # connect to the PostgreSQL server
        print('Connecting to the PostgreSQL database...')
        conn = psycopg2.connect(**params)
		
        # create a cursor
        cur = conn.cursor()
        cur.execute(sql_content)
    # close the communication with the PostgreSQL
        cur.close()
    except (Exception, psycopg2.DatabaseError) as error:
        print(error)
    finally:
        if conn is not None:
            conn.close()
            print('Database connection closed.')

def exec_apply():
    path_sql = os.path.join(os.path.dirname(__file__), "coffeemanager-postgre.sql")
    with open(path_sql, 'r', encoding='utf-8') as sql_file:
        sql_content = sql_file.read()
        apply_sql(sql_content)

def exec_command():
    parser = ArgumentParser(description="Your main parser")
    sub_parser = parser.add_subparsers(title="Subcommands", dest="subcommand")
    parser_convert = sub_parser.add_parser("run", help="Run script ")
    parser_convert.set_defaults(func=connect)
    args = parser.parse_args()
    if hasattr(args, "func"):
        args.func()

def main():
    exec_command()

if __name__ == '__main__':
    main()