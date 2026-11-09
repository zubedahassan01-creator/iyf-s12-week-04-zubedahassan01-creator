const gradeTracker = {
    students: [],
    addStudent(name, grades) {
        if (this.getStudent(name) !== null) return "A student with that name already exists";
        this.students.push({ name, grades: { ...grades } });
        return this.getStudent(name);
    },
    getStudent(name) { return this.students.find((student) => student.name === name) ?? null; },
    getStudentAverage(name) {
        const student = this.getStudent(name);
        if (student === null) return null;
        const scores = Object.values(student.grades);
        return scores.length === 0 ? null : scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },
    getSubjectAverage(subject) {
        const scores = this.students.map((student) => student.grades[subject]).filter((score) => typeof score === "number");
        return scores.length === 0 ? null : scores.reduce((sum, score) => sum + score, 0) / scores.length;
    },
    getTopStudent() {
        if (this.students.length === 0) return null;
        return this.students.reduce((top, student) => this.getStudentAverage(student.name) > this.getStudentAverage(top.name) ? student : top);
    },
    getStrugglingStudents() { return this.students.filter((student) => this.getStudentAverage(student.name) < 70); },
    getLetterGrade(score) {
        if (score >= 90) return "A";
        if (score >= 80) return "B";
        if (score >= 70) return "C";
        if (score >= 60) return "D";
        return "F";
    },
    generateReportCard(name) {
        const student = this.getStudent(name);
        if (student === null) return "Student not found";
        const lines = Object.entries(student.grades).map(([subject, score]) => `${subject}: ${score} (${this.getLetterGrade(score)})`);
        const average = this.getStudentAverage(name);
        return [`Report card: ${student.name}`, ...lines, `Average: ${average.toFixed(2)} (${this.getLetterGrade(average)})`].join("\n");
    }
};

gradeTracker.addStudent("Alice", { math: 95, english: 88, science: 92 });
gradeTracker.addStudent("Nia", { math: 72, english: 85, science: 78 });
gradeTracker.addStudent("Charlie", { math: 60, english: 65, science: 58 });
console.log(gradeTracker.getStudentAverage("Alice").toFixed(2)); // 91.67
console.log(gradeTracker.getSubjectAverage("math").toFixed(2)); // 75.67
console.log(gradeTracker.getTopStudent().name); // Alice
console.log(gradeTracker.getStrugglingStudents().map((student) => student.name)); // ["Charlie"]
console.log(gradeTracker.generateReportCard("Alice"));
