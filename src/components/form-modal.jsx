/* eslint-disable react/prop-types */
import { useForm } from "react-hook-form";
import { Button } from "./ui/button";
import {
    DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
} from "./ui/dialog";
import { Input } from "./ui/input";
import { Label } from "./ui/label";

export function FormModal({fullData ,data, setData}) {
  const {register, reset, handleSubmit, formState: {errors}} = useForm();
  const onSubmit = (newData) => {
    if (data) {
        const updatedData = fullData.map((item) =>
            item.id == newData.id ? { ...item, ...newData } : item
          );
      console.log("updatedData", updatedData)
      setData(updatedData); 
    } else {
      setData((prevData) => [...prevData, newData]);
    }
  

    reset();
  };
  
  return (
    <DialogContent className="sm:max-w-[425px] bg-white rounded-lg">
      <DialogHeader>
        <DialogTitle>{data? "Edit" : "Add"} profile</DialogTitle>
        <DialogDescription>
            {data? "Edit" : "Add"} new profile here. Click save when you are done.
        </DialogDescription>
      </DialogHeader>
      <div className="grid gap-4 py-4">
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="id" className="text-right">
            Id
          </Label>
          <Input defaultValue={data?.id}  id="id" type="number" className="col-span-3" {...register("id", {required: "Id is required"})}/>
          {errors.id?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.id.message}
            </div>
            )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="name" className="text-right">
            Name
          </Label>
          <Input id="name" defaultValue={data?.name} className="col-span-3" {...register("name", {required: "name is required"})}/>
          {errors.name?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.name.message}
            </div>
            )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="username" className="text-right">
            Username
          </Label>
          <Input id="username" defaultValue={data?.username}  className="col-span-3" {...register("username", {required: "username is required"})}/>
          {errors.username?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.username.message}
            </div>
            )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="phone" className="text-right">
            Phone
          </Label>
          <Input id="phone" defaultValue={data?.phone} className="col-span-3" {...register("phone", {required: "phone is required"})}/>
          {errors.phone?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.phone.message}
            </div>
            )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="email" className="text-right">
            Email
          </Label>
          <Input id="email" defaultValue={data?.email} className="col-span-3" {...register("email", {required: "email is required"})}/>
          {errors.email?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.email.message}
            </div>
            )}
        </div>
        <div className="grid grid-cols-4 items-center gap-4">
          <Label htmlFor="department" className="text-right">
            Department
          </Label>
          <Input id="department" defaultValue={data?.department} className="col-span-3" {...register("department", {required: "department is required"})}/>
          {errors.department?.message && (
            <div className="col-span-3 text-red-500 text-sm mt-1 ml-14">
            {errors.department.message}
            </div>
            )}
        </div>
      </div>
      <DialogFooter>
        <DialogClose asChild>
            <Button className="bg-slate-200" type="submit" onClick={handleSubmit(onSubmit)}>
                Save changes
            </Button>
        </DialogClose>
      </DialogFooter>
    </DialogContent>
  );
}
