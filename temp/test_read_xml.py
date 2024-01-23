import xml.etree.ElementTree as ET

def get_person_data(xml_file, filter_attribute, filter_value):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    for people in root.findall('people'):
        for person in people.findall('person'):
            if person.get(filter_attribute) == filter_value:
                # Assuming 'type', 'cln', 'tbn' are sub-elements of 'person'
                person_data = {
                    'id': person.get('id'),
                    'type': person.get('type'),
                    'cln': person.get('cln'),
                    'tbn': person.get('tbn')
                }
                return person_data

def get_people_by_attribute(xml_file, attribute_name, attribute_value):
    tree = ET.parse(xml_file)
    root = tree.getroot()

    result = []
    for people in root.findall('people'):
        for person in people.findall('person'):
            if person.get(attribute_name) == attribute_value:
                result.append(person.attrib)

    return result


# Specify the path to your XML file
xml_file_path = "example.xml"

# Get data for a person with id="2"
person_data = get_person_data(xml_file_path, 'id', '2')

if person_data:
    print("Person Data:")
    print(f"ID: {person_data['id']}")
    print(f"Type: {person_data['type']}")
    print(f"Cln: {person_data['cln']}")
    print(f"Tbn: {person_data['tbn']}")
else:
    print("Person not found.")

xml_file_path = "example.xml"
attribute_name = "cln"
attribute_value = "code"

result = get_people_by_attribute(xml_file_path, attribute_name, attribute_value)

for person in result:
    print(person)