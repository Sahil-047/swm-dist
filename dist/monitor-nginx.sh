#!/bin/bash
# Monitor Nginx status and restart if needed

LOG_FILE="/var/log/nginx-monitor.log"

if ! systemctl is-active --quiet nginx; then
    echo "$(date): Nginx is down, restarting..." >> $LOG_FILE
    systemctl restart nginx
    echo "$(date): Nginx restarted successfully" >> $LOG_FILE
else
    echo "$(date): Nginx is running normally" >> $LOG_FILE
fi

