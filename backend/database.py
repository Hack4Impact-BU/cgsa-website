import sqlite3

tables = ['booking', 'newsletter', 'volunteer']  # list of table names

with sqlite3.connect('instance/site.db') as conn:
    c = conn.cursor()
    for table in tables:
        c.execute(f"SELECT * FROM {table}")
        rows = c.fetchall()
        print(f"Table: {table}")
        for row in rows:
            print(row)
        print()  # empty line for readability

#To fetch data command: python3 backend/database.py