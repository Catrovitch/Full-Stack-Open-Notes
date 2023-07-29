#!/bin/bash

# Define the total number of parts
total_parts=13

# Function to add the main header to Part-X-Summary.md
add_header_to_file() {
    part_number="$1"
    file="Part-$part_number/Part-$part_number-Summary.md"

    if [ -f "$file" ]; then
        # Check if the file is empty
        if [ -s "$file" ]; then
            # File is not empty, check if the main header already exists
            if ! grep -q "^# Part $part_number Summary" "$file"; then
                # Main header doesn't exist, append it
                sed -i "1s/^/# Part $part_number Summary\n/" "$file"
                echo "Main header added to $file"
            else
                echo "Main header already exists in $file"
            fi
        else
            # File is empty, write the main header
            echo "# Part $part_number Summary" > "$file"
            echo "Main header created in $file"
        fi
    else
        echo "Error: $file not found or is not a regular file"
    fi
}

# Loop through all part numbers starting from 1 up to the total_parts
for ((i=1; i<=total_parts; i++)); do
    add_header_to_file "$i"
done
