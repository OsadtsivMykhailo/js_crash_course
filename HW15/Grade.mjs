export class Grade {
    #firstSemester;
    #secondSemester;
    getFirstSemester() {
        return this.#firstSemester;
    }
    setFirstSemester(firstSemester = 0) {
        this.#firstSemester = firstSemester;
    }
    getSecondSemester() {
        return this.#secondSemester;
    }
    setSecondSemester(secondSemester = 0) {
        this.#secondSemester = secondSemester;
    }
}