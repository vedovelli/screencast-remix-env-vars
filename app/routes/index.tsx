export async function loader() {
  return {};
}

export default function Index() {
  console.log(ENV.DOMAIN);
  console.log(ENV.SESSION_SECRET);
  console.log(ENV.TIMEOUT);
  return (
    <div style={{ fontFamily: "system-ui, sans-serif", lineHeight: "1.4" }}>
      <h1>Welcome to Env Vars on Remix</h1>
    </div>
  );
}
