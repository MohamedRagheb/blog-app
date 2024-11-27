interface ISecureFetchProps<T> extends RequestInit {
  dataDefaultValue: T;
  path: string;
}

export default async function SecureFetch<T>({
  dataDefaultValue,
  path,
  ...props
}: ISecureFetchProps<T>): Promise<T> {
  try {
    const res = await fetch(path, {
      method: props?.method || "GET",

      ...(props as RequestInit),
    });
    return (await res.json()) as T;
  } catch (error) {
    console.error("Fetch error:", error);
  }
  return dataDefaultValue;
}
