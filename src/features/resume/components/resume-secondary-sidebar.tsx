import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ResumeSecondarySidebar() {
  return (
    <aside className="hidden lg:block border-r p-6 space-y-8">
      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="name">Full Name</Label>
        <Input id="name" placeholder="Full Name" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="title">Job Title</Label>
        <Input id="title" placeholder="Job Title" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="mobile">Mobile Number</Label>
        <Input id="mobile" placeholder="Mobile Number" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="email">Email</Label>
        <Input type="email" id="email" placeholder="Email" />
      </div>

      <div className="grid w-full max-w-sm items-center gap-3">
        <Label htmlFor="address">Address</Label>
        <Input id="address" placeholder="Address" />
      </div>
    </aside>
  );
}
