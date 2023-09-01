export type Account = {
  id: number;
  email: string;
  password: string;
};

export async function getAccounts() {
  // const accounts = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/accounts`);
  // return await accounts.json();
}
