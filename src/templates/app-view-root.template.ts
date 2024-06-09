export const AppViewRootTemplate = `import React from "react";
import { createRoot } from "react-dom/client";
import Layout from "%layout_path%"
import View from "%view_path%"

const ViewIndex = () => {
  return <Layout>
    <View />
  </Layout>
}

// render component
const domNode = document.getElementById("root");
const root = createRoot(domNode);
root.render(<ViewIndex />);`;