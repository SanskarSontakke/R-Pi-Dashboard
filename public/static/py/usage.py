import psutil
import json
import subprocess

def get_cpu_temperature():
    try:
        temp = subprocess.check_output(["vcgencmd", "measure_temp"]).decode("UTF-8")
        return float(temp.split('=')[1].split("'")[0])
    except Exception as e:
        print(f"Error getting CPU temperature: {e}")
        return None

def get_system_stats():
    cpu_usage = psutil.cpu_percent(interval=1, percpu=True)
    disk_usage = psutil.disk_usage('/').percent
    ram_usage = psutil.virtual_memory().percent
    cpu_temp = get_cpu_temperature()

    stats = {
        'cpu_usage': cpu_usage,  # Array of CPU usage per core
        'disk_usage': disk_usage,
        'ram_usage': ram_usage,
        'cpu_temp': cpu_temp  # CPU temperature
    }

    return json.dumps(stats)

if __name__ == "__main__":
    print(get_system_stats())
