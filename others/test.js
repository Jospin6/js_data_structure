
function expect(val) {
    return {
      toBe: (expectedVal) => {
        if (val === expectedVal) {
          return true;
        } else {
          throw new Error("Not Equal");
        }
      },
      notToBe: (expectedVal) => {
        if (val !== expectedVal) {
          return true;
        } else {
          throw new Error("Equal");
        }
      }
    };
  }

console.log(expect(5).notToBe(2))