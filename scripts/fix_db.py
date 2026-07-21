import os
import re

files = [
    "src/components/Header.tsx",
    "src/app/bank-soal/actions.ts",
    "src/app/(auth)/actions.ts",
    "src/app/modul-ajar/actions.ts",
    "src/app/lkpd/actions.ts",
    "src/app/page.tsx",
    "src/app/setup/actions.ts",
    "src/app/tp-atp/actions.ts",
    "src/app/settings/actions.ts",
    "src/app/promes/actions.ts"
]

def process_file(fpath):
    full_path = os.path.join("e:\\WEB\\MASTER", fpath)
    if not os.path.exists(full_path):
        print(f"File not found: {full_path}")
        return
    
    with open(full_path, "r", encoding="utf-8") as f:
        content = f.read()
    
    content = content.replace('import { db } from "@/lib/db";', 'import { getDb } from "@/lib/db";')
    content = content.replace("import { db } from './db';", "import { getDb } from './db';")
    
    content = re.sub(r'(?<![a-zA-Z0-9_])db\.', 'getDb().', content)
    
    with open(full_path, "w", encoding="utf-8") as f:
        f.write(content)
    print(f"Processed: {fpath}")

for f in files:
    process_file(f)
