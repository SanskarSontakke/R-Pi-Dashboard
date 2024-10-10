# cpu_usage.py
import psutil
import json

cpu_usage = psutil.cpu_percent(interval=1, percpu=True)  # Get CPU usage for each core

cpu_usage_json = json.dumps(cpu_usage)  # Convert to JSON

print(cpu_usage_json)  # Output the JSON to standard output
