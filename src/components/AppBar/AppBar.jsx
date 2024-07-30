import React from "react";

const AppBar = () => {
  return (
    <div>
      <header>
        <section>
          <h2>Tasks</h2>
          <TaskCounter />
        </section>
        <section>
          <h2>Filter by status</h2>
          <StatusFilter />
        </section>
      </header>
    </div>
  );
};

export default AppBar;
