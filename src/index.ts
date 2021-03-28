export default function print(args: string | number | any[] | boolean) {
  console.log(args);
}

class CP {
  print(args: string | number | any[] | boolean) {
    console.log(args);
  }

  warn(args: string | number | any[] | boolean) {
    console.warn(args);
  }

  err(args: string) {
    throw new Error(args);
  }

  error(args: string) {
    throw new Error(args);
  }

  noExitErr(args: string | number | any[] | boolean) {
    console.error(args);
  }

  noExitError(args: string | number | any[] | boolean) {
    console.error(args);
  }
}

export const P = new CP();
