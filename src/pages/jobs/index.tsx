
import Link from "next/link";

export default function jobs() {
    return (
      <div>
       <h1 className="text-3xl font-medium flex justify-center text-purple-900">job page</h1>
       <Link href="/jobs/programingjobs">Programing Jobs</Link>
      
      </div>
    );
  }
