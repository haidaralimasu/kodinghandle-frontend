import React from "react";
import { Helmet } from "react-helmet";
import { Details, CommentForm, Comments } from "../../components";
import { isAuthenticated } from "../../helpers/auth";

const BlogDetail = (props) => {
  const slug = props.match.params.id;
  const authenticated = isAuthenticated();

  return (
    <div>
      <Helmet>
        <title>Koding Handle | BlogPost</title>
      </Helmet>

      <div className="container  mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="col-span-1 lg:col-span-8">
          <Details slug={slug} />

          {authenticated ? <CommentForm slug={slug} /> : null}
          <Comments slug={slug} />
        </div>
      </div>
    </div>
  );
};

export default BlogDetail;
