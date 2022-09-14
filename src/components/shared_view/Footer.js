import React from "react"

const currentYear = (new Date().getFullYear())
const yearTxt = currentYear === 2022 ? "2022" : "2022 - "+currentYear

return (
  <footer class="footer">
  © { yearTxt } Service - Developed by Batata webshop.
  </footer>
)