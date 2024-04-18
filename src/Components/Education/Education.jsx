import React from "react";
import "./Education.css";

function Education() {
  return (
    <section className="educationSection" id="Education">
      <h1 id="education">Education</h1>
      <table className="custom-table" border="2">
        <thead>
          <tr>
            <th className="table-th">Qualification</th>
            <th className="table-th">Year</th>
            <th className="table-th">Grade</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="table-td">
              Vellore Institute of Technology, Vellore
              <div>B.Tech in Computer Science and Engineering</div>
            </td>
            <td className="table-td">2022-2026</td>
            <td className="table-td">9.37</td>
          </tr>
          <tr>
            <td className="table-td">
              Rahul MSS School, Jaipur
              <div>XII(CBSE)</div>
            </td>
            <td className="table-td">2021</td>
            <td className="table-td">93.8%</td>
          </tr>
          <tr>
            <td className="table-td">
              St. Wilfred's School, Jaipur
              <div>X(CBSE)</div>
            </td>
            <td className="table-td">2019</td>
            <td className="table-td">91.8%</td>
          </tr>
        </tbody>
      </table>
    </section>
  );
}

export default Education;
