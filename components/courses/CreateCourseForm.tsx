"use client";

import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import axios from "axios";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { ComboBox } from "@/components/custom/ComboBox";
import { useRouter } from "next/navigation";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

const formSchema = z.object({
  title: z.string().min(2, {
    message: "Title is required and minimum 2 characters",
  }),
  categoryId: z.string().min(1, {
    message: "Category is required",
  }),
  subCategoryId: z.string().min(1, {
    message: "Subcategory is required",
  }),
});

interface CreateCourseFormProps {
  categories: {
    label: string; // name of category
    value: string; // categoryId
    subCategories: { label: string; value: string }[];
  }[];
}

const CreateCourseForm = ({ categories }: CreateCourseFormProps) => {
  const router = useRouter();

  // 1. Define the form with default values and resolver
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      categoryId: "",
      subCategoryId: "",
    },
  });

  const { isSubmitting } = form.formState;

  // 2. Define a submit handler with debugging
  const onSubmit = async (values: z.infer<typeof formSchema>) => {
    console.log("📝 Form Submitted with Values:", values);

    // ✅ Check for missing fields manually
    const missingFields = [];
    if (!values.title) missingFields.push("Title");
    if (!values.categoryId) missingFields.push("Category");
    if (!values.subCategoryId) missingFields.push("Subcategory");

    if (missingFields.length > 0) {
      console.warn("🚨 Missing Fields:", missingFields);
      toast.error(`Missing fields: ${missingFields.join(", ")}`);
      return; // ⛔ Prevent API call if required fields are missing
    }

    try {
      const response = await axios.post("/api/courses", values);
      router.push(`/instructor/courses/${response.data.id}/basic`);
      toast.success("New Course Created");
    } catch (err) {
      console.error("❌ Failed to create new course", err);
      toast.error("Something went wrong!");
    }
  };

  return (
    <div className="p-10">
      <h1 className="text-xl font-bold">Let’s give some basics for your course</h1>
      <p className="text-sm mt-3">
        It is okay if you cannot think of a good title or correct category now.
        You can change them later.
      </p>

      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8 mt-10">
          <FormField
            control={form.control}
            name="title"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Title</FormLabel>
                <FormControl>
                  <Input placeholder="Ex: Web Development for Beginners" {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="categoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Category</FormLabel>
                <FormControl>
                  <ComboBox options={categories} {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <FormField
            control={form.control}
            name="subCategoryId"
            render={({ field }) => (
              <FormItem className="flex flex-col">
                <FormLabel>Subcategory</FormLabel>
                <FormControl>
                  <ComboBox
                    options={
                      categories.find((category) => category.value === form.watch("categoryId"))?.subCategories || []
                    }
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          <Button type="submit" disabled={isSubmitting}>
            {isSubmitting ? <Loader2 className="h-4 w-4 animate-spin" /> : "Create"}
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default CreateCourseForm;
