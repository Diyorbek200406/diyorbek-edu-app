import { useState } from "react";

import { GetServerSideProps } from "next";
import axios from "axios";
import { withLayout } from "../layout/layout";
import { MenuItem } from "../interfaces/menu.interface";

const Index = ({ firstCategory, menu }: HomeProps): JSX.Element => {
  const [is, setIs] = useState(false);

  const [rating, setRating] = useState<number>(4);

  return (
    <>
      <h1>Hello </h1>
    </>
  );
};
export default withLayout(Index);

export const getServerSideProps: GetServerSideProps<HomeProps> = async () => {
  const firstCategory = 0;
  const { data: menu } = await axios.post<MenuItem[]>(`${process.env.NEXT_PUBLIC_DOMAIN}/api/page-find`, { firstCategory });
  return {
    props: { firstCategory, menu },
  };
};

interface HomeProps extends Record<string, unknown> {
  firstCategory: number;
  menu: MenuItem[];
}
