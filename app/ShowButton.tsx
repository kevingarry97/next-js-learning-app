'use client';

import React from 'react'

const ShowButton = () => {
  return (
    <button
        onClick={async () => {
          const _ = (await import("lodash")).default;

          const users = [
            { name: "c" },
            { name: "b" },
            { name: "a" },
          ];

          const sorted = _.orderBy(users, ["name"]);
          console.log(sorted);
        }}
      >
        Show
      </button>
  )
}

export default ShowButton
