

while true; do
  cd ~/Dashboard/Raspberry-tm1637/
  temp=$(vcgencmd measure_temp | grep -oP '\d+' | head -n 1)
  temp_display="${temp} C"
  ./tm1637 -t "$temp_display"
  sleep 0.5
done
