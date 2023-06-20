import {student, StudentType} from "../02/02";
import {CityType, GovernmentBuildingsType, HouseType} from "../02/02_02";
import exp from "constants";


export const addSkill = (student: StudentType, skill: string) => {
    student.technologies.push({
        id: new Date().getTime(),
        title: skill
    })
}

export function makeStudentActive(s: StudentType) {
    s.isActive = true

}

export function doesStudentLiveIn(s: StudentType, cityName: string) {
    return s.address.city.title === cityName
}

export function addMoneyToBudget(building: GovernmentBuildingsType, budget: number) {
    building.budget += budget;
}

export function repairHouse(houseType: HouseType) {
    houseType.repaired = true;
}

export function toFireStaff(buildings: GovernmentBuildingsType, staff: number) {
    buildings.staffCount -= staff;
}

export function toHireStaff(governmentBuildings: Array<GovernmentBuildingsType>, number: number) {
    governmentBuildings[0].staffCount += number;
}

export function createMessage(city: CityType) {
// return "Hello " + city.title + " citizens. I want you be happy. All " + city.citizensNumber + " men"
 return `Hello ${city.title} citizens. I want you be happy. All ${city.citizensNumber} men`

}
