'use client'

// Removed useEffect import
import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader
} from '@/components/ui/card'
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage
} from '@/components/ui/form'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { useToast } from '@/components/ui/use-toast'
import { Loader2 } from 'lucide-react'
import { getFormSchema, type FormValues } from '@/lib/validation' // Ensure this path is correct

export function ContactForm() {
  const { toast } = useToast()
  const formSchema = getFormSchema()

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    mode: 'onChange', // Validation runs on change using the schema
    defaultValues: {
      firstName: '',
      lastName: '',
      email: '',
      message: '',
      honeypot: '' // Keep default empty
    }
  })

  // Removed watch, setError, clearErrors from destructuring as they are no longer directly used here
  const { handleSubmit, formState, control } = form
  const { isSubmitting } = formState

  // REMOVED the problematic useEffect block

  async function onSubmit(data: FormValues) {
    // Optional: Keep honeypot check for explicit user feedback,
    // although Zod prevents submission if it fails the refine check.
    if (data.honeypot) {
       console.warn('Honeypot field filled, likely spam.');
       toast({
         title: 'Submission Blocked',
         description: 'Invalid form submission.', // Keep it vague for bots
         variant: 'destructive'
       });
       return; // Stop submission
    }


    // Removed unused FormData creation
    // const formData = new FormData();
    // Object.entries(data).forEach(([key, value]) => {
    //   if (value) {
    //     formData.append(key, value);
    //   }
    // });

    try {
      const response = await fetch('/api/send', {
        method: 'POST',
        headers: { // Important: Specify content type for JSON
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ // Send only the necessary data
          firstName: data.firstName,
          lastName: data.lastName,
          email: data.email,
          message: data.message
          // DO NOT send the honeypot field to your actual email sending logic
        })
      })

      // Check if the fetch itself was successful
      if (!response.ok) {
         // Attempt to read error details if possible
         const errorData = await response.json().catch(() => ({})); // Avoid error if body isn't JSON
         console.error("API Error:", response.status, response.statusText, errorData);
         throw new Error(`API request failed with status ${response.status}`);
      }


      await response.json(); // Process the successful response if needed

      toast({
        title: 'Email sent',
        description: 'I will get back to you as soon as possible!',
        variant: 'default'
      })
      form.reset() // Reset the form fields
    } catch (error) {
      console.error("Error submitting form:", error); // Log the actual error
      toast({
        title: 'Error',
        description:
          'There was an error submitting the form. Please try again later.',
        variant: 'destructive'
      })
    }
  }

  return (
    <div className='flex justify-center items-center'>
      <Card className='w-full max-w-3xl'>
        <CardHeader>
          <CardDescription className='font-mono text-pretty'>
            Please, fill out the form below and I'll get back to you as
            soon as possible.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            {/* eslint-disable-next-line @typescript-eslint/no-misused-promises */}
            <form noValidate onSubmit={handleSubmit(onSubmit)}>
              <div className='space-y-4'>
                <div className='grid grid-cols-2 gap-4'>
                  <div className='space-y-2'>
                    <FormField
                      control={control}
                      name='firstName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>First Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id='first-name' // id is good for accessibility
                              placeholder='Your first name'
                              aria-required="true" // Add aria attributes
                            />
                          </FormControl>
                          <FormMessage /> {/* Shows Zod errors */}
                        </FormItem>
                      )}
                    />
                  </div>
                  <div className='space-y-2'>
                    <FormField
                      control={control}
                      name='lastName'
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Last Name</FormLabel>
                          <FormControl>
                            <Input
                              {...field}
                              id='last-name'
                              placeholder='Your last name'
                               aria-required="true"
                            />
                          </FormControl>
                          <FormMessage /> {/* Shows Zod errors */}
                        </FormItem>
                      )}
                    />
                  </div>
                </div>
                <div className='space-y-2'>
                  <FormField
                    control={control}
                    name='email'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Email</FormLabel>
                        <FormControl>
                          <Input
                            {...field}
                            type="email" // Use type="email" for basic browser validation/hints
                            id='email'
                            placeholder='Your email address'
                             aria-required="true"
                          />
                        </FormControl>
                        <FormMessage /> {/* Shows Zod errors */}
                      </FormItem>
                    )}
                  />
                </div>
                <div className='space-y-2'>
                  <FormField
                    control={control}
                    name='message'
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Message</FormLabel>
                        <FormControl>
                          <Textarea
                            {...field}
                            id='message'
                            placeholder='Enter your message here...'
                            rows={5} // Give it a bit more default height
                            aria-required="true"
                          />
                        </FormControl>
                        <FormMessage /> {/* Shows Zod errors including the URL one */}
                      </FormItem>
                    )}
                  />
                </div>
                {/* Honeypot Field - Hidden using CSS is preferred */}
                {/* Use CSS to hide it visually and from screen readers, but keep it in DOM */}
                <div className="absolute left-[-5000px]" aria-hidden="true">
                  <FormField
                    control={control}
                    name='honeypot'
                    render={({ field }) => (
                      <FormItem>
                        {/* Optional: Add a label bots might see */}
                        <label htmlFor="honeypot">Please leave this field empty</label>
                        <Input
                          {...field}
                          id='honeypot' // Use the label's htmlFor
                          tabIndex={-1}
                          autoComplete='off'
                          // No FormLabel or FormMessage needed here
                        />
                      </FormItem>
                    )}
                  />
               </div>
              </div>
              <Button
                type='submit'
                disabled={isSubmitting} // Disable while submitting
                className='w-full mt-6'
                aria-label="Submit contact form"
              >
                {isSubmitting && (
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                )}
                Submit
              </Button>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  )
}