import { BsPersonCheckFill } from "react-icons/bs";
import { GrDocumentUser } from "react-icons/gr";
import { IoIosPeople } from "react-icons/io";
import { PiStudentBold } from "react-icons/pi";

export default function Ribbon() {
  return (
    <div className="w-full flex justify-center items-center bg-quaternary py-8">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 items-center justify-center gap-5">
        {/* First */}
        <div className="flex flex-col justify-center items-center col-span-1">
          <div className="icon py-2">
            <PiStudentBold className="size-10 text-secondary" />
          </div>
          <div className="info flex flex-col items-center justify-center py-4 text-xl font-bold">
            <p className="text-black">8700+</p>
            <p className="text-primary">Enrolled Students</p>
          </div>
        </div>

        {/* Second */}
        <div className="flex flex-col justify-center items-center col-span-1">
          <div className="icon py-2">
            <GrDocumentUser className="size-10 text-secondary" />
          </div>
          <div className="info flex flex-col items-center justify-center py-4 text-xl font-bold">
            <p className="text-black">110+</p>
            <p className="text-primary">Courses Available</p>
          </div>
        </div>

        {/* Third */}
        <div className="flex flex-col justify-center items-center col-span-1">
          <div className="icon py-2">
            <IoIosPeople className="size-10 text-secondary" />
          </div>
          <div className="info flex flex-col items-center justify-center py-4 text-xl font-bold">
            <p className="text-black">10+</p>
            <p className="text-primary">Partner Institutes</p>
          </div>
        </div>

        {/* Fourth */}
        <div className="flex flex-col justify-center items-center col-span-1">
          <div className="icon py-2">
            <BsPersonCheckFill className="size-10 text-secondary" />
          </div>
          <div className="info flex flex-col items-center justify-center py-4 text-xl font-bold">
            <p className="text-black">100+</p>
            <p className="text-primary">Success Rate</p>
          </div>
        </div>
      </div>
    </div>
  );
}
