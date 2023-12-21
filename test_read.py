import os

def test_read_file():
    src_file = os.path.join(os.path.dirname(__file__), "im.txt")
    des_file = os.path.join(os.path.dirname(__file__), "ex.txt")
    with open(src_file, "r") as file:
       obj = [] 
       lines = file.readlines()
       for i in range(0, len(lines)):
           line = lines[i]

my_dict = {
    'key1': 'value1',
    'key2': '2',
    'key6': '3'
}

result = {key: int(value) for key, value in my_dict.items() if value.isdigit()}

print(result)
