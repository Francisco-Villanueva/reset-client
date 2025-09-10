import Layout from "../commons/Layout";
export default function Form() {
  return (
    <Layout
      className=" bg-white   h-[100vh]  relative   flex justify-center items-center gap-4  pt-14 max-md:pt-0   "
      id={"form"}
    >
      <iframe
        src="https://agendapro.com/iframe/overview/40e834df-51fa-4dbc-9fed-9a7d9398e544"
        width="810"
        height={"100%"}
        marginwidth="0"
        marginheight="0"
        frameborder="no"
        scrolling="yes"
        className="border-0"
        // style="border-width:0px;"
      ></iframe>
    </Layout>
  );
}
