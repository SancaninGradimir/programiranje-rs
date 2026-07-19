#!/bin/bash

set -e

echo "=== Removing unused curriculum languages ==="

cd curriculum/i18n-curriculum/curriculum/challenges

for dir in */ ; do
    dir=${dir%/}
    if [[ "$dir" != "swahili" && "$dir" != "english" ]]; then
        echo "Removing curriculum: $dir"
        rm -rf "$dir"
    fi
done

echo
echo "=== Removing unused client locales ==="

cd ../../../../client/i18n/locales

for dir in */ ; do
    dir=${dir%/}
    if [[ "$dir" != "swahili" && "$dir" != "english" ]]; then
        echo "Removing locale: $dir"
        rm -rf "$dir"
    fi
done

echo
echo "Done."
