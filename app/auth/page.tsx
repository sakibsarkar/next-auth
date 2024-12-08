import Logout from "@/components/Logout";
import { authConfig } from "@/lib/auth";
import { getServerSession } from "next-auth";

const page = async () => {
  const session = await getServerSession(authConfig);
  const name = session?.user?.name;

  return (
    <>
      <p>hello: {name}</p>
      <Logout />
    </>
  );
};

export default page;
