- Project Rules
- User Rules
- Team Rules
- AGENTS.md

## Project rules
- .cursor.rules အောက်မှာ .mdcအနေနဲ့ ရှိတယ်။
- Code baseအတွက် domain specific knowledge, automated workflows and standardize style or architecture decisions

### Rule File Structure
- .mdc fileဖြစ်ရမယ်, Folderတွေနဲ့ Organizeလုပ်လို့ရတယ်။
- .cursor/rulesအောက်မှာ .mdဖိုင်တွေကို rule system က ignore လုပ်ပါတယ်။

### Rules types
- Always Apply - Apply to every chat session
- Apply Intelligently - When Agent decides it's relevant based on description.
- Apply to Specific Files - When file matches a specified pattern
- Apply Manually - When `@` mentioned in chat (@myrule).

