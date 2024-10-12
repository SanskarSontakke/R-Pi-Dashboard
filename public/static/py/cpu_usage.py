import psutil
import json

def get_system_stats():
    # CPU usage per core
    cpu_usage = psutil.cpu_percent(interval=1, percpu=True)
    
    # Disk usage
    disk_usage = psutil.disk_usage('/').percent

    # RAM usage
    ram_usage = psutil.virtual_memory().percent

    # Collect everything into a dictionary
    stats = {
        'cpu_usage': cpu_usage,  # This will be an array with per-core data
        'disk_usage': disk_usage,
        'ram_usage': ram_usage
    }
    
    # Return the stats as JSON
    return json.dumps(stats)

if __name__ == "__main__":
    print(get_system_stats())
