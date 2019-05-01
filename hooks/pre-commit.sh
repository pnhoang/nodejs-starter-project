echo "start formatting all staged files with prettier"

jsfiles=$(git diff --cached --name-only --diff-filter=ACM "*.js" "*.jsx" "*.json" | tr '\n' ' ')
if [ ! -z "$jsfiles" ]; then
    # Prettify all staged files
    for f in $jsfiles; do
        echo "formatting - " $f
        prettier --find-config-path --write $f
    done

    # Add back the modified/prettified files to staging
    echo "$jsfiles" | xargs git add
fi