import os
import re
from pathlib import Path

# Map directory names to subject names in database
SUBJECT_MAPPING = {
    "AP Art History": "AP English Language",  # Using as placeholder for arts
    "AP Music Theory": "AP English Language",  # Using as placeholder for arts
    "AP Computer Science A": "AP Computer Science A",
    "AP Computer Science AB": "AP Computer Science A",
    "AP English Language": "AP English Language",
    "AP English Literature": "AP English Literature",
    "AP French": "AP English Language",  # Foreign languages placeholder
    "AP German": "AP English Language",
    "AP Italian": "AP English Language",
    "AP Latin": "AP English Language",
    "AP Spanish": "AP English Language",
    "AP US History": "AP US History",
    "AP World History": "AP World History",
    "AP European History": "AP European History",
    "AP Calculus AB": "AP Calculus AB",
    "AP Calculus BC": "AP Calculus BC",
    "AP Statistics": "AP Statistics",
    "AP Biology": "AP Biology",
    "AP Chemistry": "AP Chemistry",
    "AP Environmental Science": "AP Chemistry",  # Using Chemistry as placeholder
    "AP Physics 1": "AP Physics 1",
    "AP Physics 2": "AP Physics 2",
    "AP Physics C Mechanics": "AP Physics C: Mechanics",
    "AP Physics C Electricity": "AP Physics C: E&M",
}

def extract_year(filename):
    """Extract year from filename"""
    match = re.search(r'(19|20)\d{2}', filename)
    return match.group(0) if match else None

def determine_subject(filepath):
    """Determine subject from file path"""
    path_str = str(filepath)
    
    # Check each subject mapping
    for key in SUBJECT_MAPPING:
        if key in path_str:
            return SUBJECT_MAPPING[key]
    
    # Default fallback
    return "AP English Language"

def clean_title(filename):
    """Create clean title from filename"""
    # Remove .pdf extension
    title = filename.replace('.pdf', '')
    # Simplify common patterns
    title = re.sub(r'\s+MCQ Multiple Choice Questions with Answers Advanced Placement', '', title)
    title = re.sub(r'\s+Advanced Placement', '', title)
    return title

def generate_migration():
    resources_path = Path('server/src/main/resources/static/resources/AP')
    
    sql_entries = []
    
    # Walk through all PDF files
    for pdf_file in resources_path.rglob('*.pdf'):
        relative_path = '/' + str(pdf_file.relative_to(Path('server/src/main/resources/static'))).replace('\\', '/')
        filename = pdf_file.name
        
        title = clean_title(filename)
        year = extract_year(filename)
        subject = determine_subject(pdf_file)
        
        year_str = f"'{year}'" if year else 'NULL'
        
        sql_entry = f"('{title}', 'AP exam practice material', '{relative_path}', 'PDF', {year_str}, (SELECT id FROM subjects WHERE name = '{subject}'))"
        sql_entries.append(sql_entry)
    
    # Generate SQL file
    sql_output = "-- Insert all AP resources\n"
    sql_output += "INSERT INTO study_resources (title, description, file_path, file_type, exam_year, subject_id) VALUES\n"
    sql_output += ',\n'.join(sql_entries) + ';\n'
    
    # Write to file
    with open('server/src/main/resources/db/migration/V4__add_ap_resources.sql', 'w', encoding='utf-8') as f:
        f.write(sql_output)
    
    print(f"Generated migration with {len(sql_entries)} AP resources")

if __name__ == '__main__':
    generate_migration()
