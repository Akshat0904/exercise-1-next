import { GetServerSideProps } from "next";
import { redirect } from "next/dist/server/api-utils";

export interface IProps {
  user: string;
}

const DevDetails = (props: IProps) => {
  return <div>{props.user}</div>;
};

export default DevDetails;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { params } = context;
  let devDetailSlug;
  if (params) {
    devDetailSlug = params.devDetails;
  }

  if (devDetailSlug !== "arbour-park") {
    return {
      redirect: {
        destination: "/conveyancing",
        permanent: true,
      },
    };
  }
  return {
    props: {
      user: devDetailSlug,
    },
  };
};
