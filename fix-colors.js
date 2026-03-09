const fs = require('fs');
const path = require('path');

const dir = path.join(__dirname, 'src', 'components', 'blog-posts');
const files = fs.readdirSync(dir).filter(f => f.endsWith('.tsx'));

const replacements = {
  'text-gray-900': 'text-white',
  'text-gray-800': 'text-gray-200',
  'text-gray-700': 'text-gray-300',
  'text-gray-600': 'text-gray-400',
  'text-black': 'text-white',
  'bg-blue-50': 'bg-blue-900/20',
  'text-blue-900': 'text-blue-300',
  'text-blue-800': 'text-blue-200',
  'bg-green-50': 'bg-green-900/20',
  'text-green-900': 'text-green-300',
  'text-green-800': 'text-green-200',
  'bg-yellow-50': 'bg-yellow-900/20',
  'text-yellow-900': 'text-yellow-300',
  'text-yellow-800': 'text-yellow-200',
  'bg-purple-50': 'bg-purple-900/20',
  'text-purple-900': 'text-purple-300',
  'text-purple-800': 'text-purple-200',
  'bg-red-50': 'bg-red-900/20',
  'text-red-900': 'text-red-300',
  'text-red-800': 'text-red-200',
  'bg-indigo-50': 'bg-indigo-900/20',
  'text-indigo-900': 'text-indigo-300',
  'text-indigo-800': 'text-indigo-200',
  'bg-gray-50': 'bg-gray-800/30',
  'bg-gray-100': 'bg-gray-800/50',
  'border-gray-200': 'border-gray-700',
};

files.forEach(file => {
  const filePath = path.join(dir, file);
  let content = fs.readFileSync(filePath, 'utf8');
  let original = content;
  
  for (const [search, replace] of Object.entries(replacements)) {
    // Use regex to match exact class names
    const regex = new RegExp(`\\b${search.replace(/\-/g, '\\-')}\\b`, 'g');
    content = content.replace(regex, replace);
  }
  
  if (content !== original) {
    fs.writeFileSync(filePath, content);
    console.log(`Updated ${file}`);
  }
});
