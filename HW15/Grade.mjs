export class Grade {
    #firstSemester;
    #secondSemester;
    getFirstSemester() {
        return this.#firstSemester;
    }
    setFirstSemester(firstSemester) {
        this.#firstSemester = firstSemester;
    }
    getSecondSemester() {
        return this.#secondSemester;
    }
    setSecondSemester(secondSemester) {
        this.#secondSemester = secondSemester;
    }
}