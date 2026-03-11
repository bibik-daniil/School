var GradeSexuality;
(function (GradeSexuality) {
    GradeSexuality["WORST"] = "\u0421\u0432\u0438\u043D\u043E\u0431\u0430\u0431\u043A\u0430";
    GradeSexuality["BAD"] = "\u041F\u0443\u0434\u0436";
    GradeSexuality["NORMAL"] = "\u041D\u043E\u0440\u043C\u0438\u0441";
    GradeSexuality["GOOD"] = "\u0421\u043E\u0441\u043A\u0430";
    GradeSexuality["AMAZING"] = "\u042F \u0431\u044B \u0432\u0434\u0443\u043B, \u043D\u043E \u043A\u043E\u043D\u0447\u0443, \u043D\u0435 \u0443\u0441\u043F\u0435\u0432 \u0437\u0430\u0441\u0443\u043D\u0443\u0442\u044C";
})(GradeSexuality || (GradeSexuality = {}));
class Teacher {
    klass = null;
    fullName;
    gradeSexuality;
    constructor({ fullName, gradeSexuality }) {
        this.fullName = fullName;
        this.gradeSexuality = gradeSexuality;
    }
}
export default Teacher;
