#!/usr/bin/env sh
. "$(dirname -- "$0")/_/husky.sh"

echo '\n🏗️👷 Styling, testing and building your project before committing'

# Check Lint on files staged for commit
npx lint-staged ||
(
    echo '\n❌ Lint Format Failed ❌
    Check above for errors, change them and retry.';
    false;
)

# Check Prettier standards
npm run format:dev ||
(
    echo '\n❌ Prettier Format Failed ❌
    Run npm run format, add changes and try commit again.';
    false;
)

# Check ESLint Standards
npm run check-format:dev ||
(
    echo '\n ⚠️ Prettier Check Failed ⚠️
    Make the required changes listed above, add changes and try to commit again.'
    false;
)
# If everything passes... Now we can build
echo '\n 🔨... Alright.... Code looks good to me... Trying to build now. 🔨'

npm run build ||
(
    echo '❌ Next build failed ❌
    View the errors above to see why.'
    false;
)

# If everything passes... Now we can commit
echo '✅ ✅ ✅ ✅ Amazing !! I am committing this now.'
