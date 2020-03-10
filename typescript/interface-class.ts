interface HasBooleanCheck {
  result: boolean;
  isTrue(): boolean;
  isFalse(): boolean;
}
class ClassWithBooleanCheck implements HasBooleanCheck {
  result: boolean;
  constructor() {
    this.result = false;
  }
  isTrue(): boolean {
    return this.result;
  }
  isFalse(): boolean {
    return !this.result;
  }
}
