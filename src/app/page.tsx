import {Button} from "@/components/ui/button";
import {auth, UserButton} from "@clerk/nextjs";
import Link from "next/link";
import { LogInIcon } from "lucide-react";
import FileUpload from "@/components/FileUpload";

export default async function Home() {
  const { userId } = auth();
  const isAuth = !!userId;

  return (
    <div className="w-screen min-h-screen bg-gradient-to-r from-blue-300 via-green-200 to-yellow-300">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        <div className="flex flex-col items-center text-center">
          <div className="flex items-center">
            <h1 className="mr-3 text-5xl font-semibold text-gray-700">
              Chat with any PDF
            </h1>

            {/*Clerk user button*/}
            <UserButton afterSignOutUrl="/" />
          </div>

          <div className="flex mt-2">
            {isAuth && (<Button>Go to Chats</Button>)}
          </div>

          <p className="max-w-xl mt-8 text-lg -text-slate-600">
            Join millions of students and professional to instantly chat with any PDF and understand research with AI.
          </p>

          <div className="w-full mt-6">
            { isAuth
              ? (<FileUpload />)
              : <Link href="/sign-in">
                  <Button>
                    Login to get started
                    <LogInIcon className="w-4 h-4 ml-2" />
                  </Button>
                </Link>
            }
          </div>
        </div>
      </div>
    </div>
  )
}
