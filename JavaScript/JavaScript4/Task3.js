let member = {
    name: "Seyi",
    membershipType: "Premium",
    borrowedBooks: [],

    borrowBook(book) {
        this.borrowedBooks.push(book);
        console.log(`${book} has been added.`);
    },

    getBorrowedCount() {
        let num = this.borrowedBooks.length;
        console.log(`${this.name} borrowed ${num} books.`);
        return num;
    },

    getMembershipInfo() {
        if (this.membershipType.toLowerCase() === "premium") {
            console.log(`${this.name} is a premium member.`);
        } else {
            console.log(`${this.name} is a basic member.`);
        }
    }
};

console.log(member.name, member.membershipType);

member.borrowBook("Soji");
member.borrowBook("Sola");

console.log(member.name, member.membershipType, member.borrowedBooks);

member.getBorrowedCount();
member.getMembershipInfo();
