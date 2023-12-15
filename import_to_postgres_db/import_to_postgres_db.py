from argparse import ArgumentParser
import subprocess, os, logging

def execute_command_inline(command: list):
    try:
        repo = subprocess.Popen(
            command,
            stdout=subprocess.PIPE,
            stderr=subprocess.PIPE,
            text=True)
        stdout, stderr = repo.communicate()
        print(f"Executing command {command} ...")
        if stderr:
            print(f"ERROR: Executed command failed: {stderr}")
            return ""
        else:
            print(f"""Command executed successfully!
Output: {stdout}""")
            return stdout
    except Exception as e:
        print(f"ERROR: An error occurred: {e}")
        raise Exception(f"An error occurred: {e}")

def import_file_to_postgres_db(sql_file: str, username: str, password: str, database_name: str):
    try:
        #for docker
        # copy file to container
        container_name = "postgres"
        execute_command_inline([
            "docker",
            "cp",
            sql_file,
            container_name + ":/test.sql"
        ])
        execute_command_inline(
            ['docker exec -i postgres psql', 
            '-U', username,
            '-p', password,
            '-d', database_name, 
            '-f', "/test.sql"])
    except Exception as e:
        print(f"ERROR: An error occurred: {e}")
        raise Exception(f"An error occurred: {e}")

def exec_command():
    parser = ArgumentParser(description="Your main parser")
    sub_parser = parser.add_subparsers(title="Subcommands", dest="subcommand")
    parser_convert = sub_parser.add_parser("run", help="Run script ")
    parser_convert.set_defaults(func=exec_import)
    args = parser.parse_args()
    if hasattr(args, "func"):
        args.func()

def exec_import():
    postgre_file = os.path.join(os.path.dirname(__file__), 'coffeemanager-postgre.sql')
    print(postgre_file)
    username = "nlethanh"
    password = "nlethanh"
    database_name = "bookingcoffeetable"
    import_file_to_postgres_db(postgre_file,username, password, database_name )
    
def main():
    exec_command()

if __name__ == "__main__":
    main()