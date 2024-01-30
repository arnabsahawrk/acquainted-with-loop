/* প্রাকটিস চ্যালেঞ্জ-১

প্রতিদিন তোমার কাজ কি? 
১) রাত ৮ টা বাজে মডিউল আনলক করো  
২) ফটাফট ভিডিও দেখে দেখে প্রাকটিস করো
৩) ভিডিও দেখতে দেখতে নোটস নাও 
৪) মডিউল শেষ হলে পুরা মডিউল নিজে নিজে প্রাকটিস করো 
৫) কোন কিছু বুঝতে না পারলে (চিন্তা করে দেখো এইখানে কিন্তু একটা শর্ত আছে ), সাপোর্ট সেশনে জয়েন করো 

এখন তোমার কাজ হচ্ছে একটা For লুপ 5 বার চালিয়ে উপরের জিনিসগুলা আউটপুট হিসেবে দেখানো। */

let everydayTask = ["1. Unlock the module at 20:00", "2. Quickly watch video with proper practice.", "3. Take notes while watching the videos.", "4. After finish the module, practice the module by self.", "5. If anything not comprehend (think about it also there is a condition), join support session."]

console.log("FOR LOOP TASK");
for (let i = 0; i < 5; i++) {
    console.log("My everyday work-", everydayTask);
}

/* প্রাকটিস চ্যালেঞ্জ-২: 

আবার একই জিনিস While লুপ চালিয়ে দেখানো। */

let i = 0;

console.log("WHILE LOOP TASK");
while (i < 5) {
    console.log("My everyday work-", everydayTask);
    i++;
}

/* প্রাকটিস চ্যালেঞ্জ-৩: 

উপরের প্রব্লেমটাই While লুপ রিভার্স ওয়েতে (Decremental হিসেবে)করে দেখাও  */
console.log("WHILE LOOP (Decremental) TASK");
while (i > 0) {
    console.log("My everyday work-", everydayTask);
    i--;
}

/* প্রাকটিস চ্যালেঞ্জ-৪: 

উপরের প্রব্লেমটাই For লুপ রিভার্স ওয়েতে (Decremental হিসেবে)করে দেখাও  */
console.log("FOR LOOP (Decremental) TASK");
for (let i = 5; i > 0; i--) {
    console.log("My everyday work-", everydayTask);
}