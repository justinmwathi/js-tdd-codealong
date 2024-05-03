
//New Test Example 
import { AgeTester } from "../AgeTester";
describe("AgeTester",()=>{
  test('It returns the age of a person based on the year o birth',()=>{
    //Arrange our data
    const birthYear=2006;
    const currentYear=new Date().getFullYear()
    const answer=currentYear-birthYear
    //Act
    const ageOfPerson=AgeTester(birthYear)
    //Assert
    expect(ageOfPerson).toBe
  })
})