import { z } from "zod";

// נגדיר סכימה (Schema) לבדיקת תקינות של רשומת ציונים
const gradeSchema = z.object({
  fullName: z.string().min(3).max(25),
  grade: z.number().min(0).max(100),
});

const arr = [
  { fullName: "Dana Levi", grade: 92 },
  { fullName: "It", grade: 120 },    // לא תקין
  { fullName: "David Cohen", grade: -5 }, // לא תקין
  { fullName: "Avi", grade: 70 }, // תקין
];

// סינון רשומות לא תקינות
const invalidRecords = arr.filter(item => {
  const result = gradeSchema.safeParse(item);
  return !result.success;
});

console.log("רשומות לא תקינות:");
console.log(invalidRecords);
