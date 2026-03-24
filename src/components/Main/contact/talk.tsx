'use client'

import React, { useRef, useState, FormEvent } from 'react'
import emailjs from '@emailjs/browser'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'

const Talk = () => {
  const form = useRef<HTMLFormElement>(null)
  const [isSuccess, setSuccess] = useState(false)
  const [isSending, setIsSending] = useState(false)
  const [status, setStatus] = useState<'READY' | 'SENDING' | 'SENT' | 'ERROR'>('READY')

  const sendEmail = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSending(true)
    setStatus('SENDING')

    if (!form.current) return

    emailjs
      .sendForm('service_akm93ow', 'template_0d6shyb', form.current, 'zbsLT_FXTpYzv9OGr')
      .then(
        (result) => {
          console.log(result.text)
          setSuccess(true)
          setStatus('SENT')
          setTimeout(() => {
            setSuccess(false)
            setStatus('READY')
            if (form.current) {
              form.current.reset()
            }
          }, 3000)
          setIsSending(false)
        },
        (error) => {
          console.log(error.text)
          setStatus('ERROR')
          setIsSending(false)
          setTimeout(() => {
            setStatus('READY')
          }, 3000)
        }
      )
  }

  return (
    <section className="flex flex-col w-full max-w-[1700px] px-4 md:px-6 mb-12 mx-auto pt-36 md:pt-40">
      <div className="border-2 border-terminal-green bg-black p-5 md:p-7 lg:p-8 shadow-glow-sm">
        <div className="flex flex-col xl:flex-row xl:items-end xl:justify-between gap-4 mb-6 pb-5 border-b border-terminal-green/30">
          <div>
            <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-[0.2em] mb-2">
              COMMUNICATION TERMINAL
            </div>
            <h1 className="font-mono text-3xl md:text-5xl text-terminal-green uppercase tracking-wider">
              CONTACT / LINK
            </h1>
            <p className="font-mono text-sm md:text-base text-terminal-green/75 mt-2 max-w-3xl">
              Send a message for collaboration, product work or technical consulting.
            </p>
          </div>
          <div className="grid grid-cols-2 gap-2 font-mono text-xs md:text-sm">
            <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
              <span className="text-terminal-green/60">CHANNEL:</span>{' '}
              <span className="text-terminal-green">EMAILJS</span>
            </div>
            <div className="border border-terminal-green/40 bg-terminal-dark/20 px-3 py-2">
              <span className="text-terminal-green/60">STATUS:</span>{' '}
              <span className="text-terminal-green">ONLINE</span>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-[320px_1fr] gap-5 md:gap-6">
          <aside className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5 space-y-3">
            <div className="font-mono text-xs text-terminal-green/70 uppercase tracking-wider border-b border-terminal-green/30 pb-2">
              CONTACT CHANNELS
            </div>
            <a href="mailto:oleksandr.zabolotnyi1@gmail.com" className="block border border-terminal-green/35 px-3 py-2 font-mono text-xs md:text-sm text-terminal-green hover:bg-terminal-green/10 transition-all">
              [•] EMAIL
            </a>
            <a href="https://github.com/InM1nd" target="_blank" rel="noopener noreferrer" className="block border border-terminal-green/35 px-3 py-2 font-mono text-xs md:text-sm text-terminal-green hover:bg-terminal-green/10 transition-all">
              [•] GITHUB
            </a>
            <a href="https://www.linkedin.com/in/oleksandr-zabolotnyi1/" target="_blank" rel="noopener noreferrer" className="block border border-terminal-green/35 px-3 py-2 font-mono text-xs md:text-sm text-terminal-green hover:bg-terminal-green/10 transition-all">
              [•] LINKEDIN
            </a>
            <a href="https://t.me/InM1nd" target="_blank" rel="noopener noreferrer" className="block border border-terminal-green/35 px-3 py-2 font-mono text-xs md:text-sm text-terminal-green hover:bg-terminal-green/10 transition-all">
              [•] TELEGRAM
            </a>
          </aside>

          <div className="border border-terminal-green/50 bg-terminal-dark/20 p-4 md:p-5 relative">
            <div className="mb-5 font-mono text-sm text-terminal-green uppercase tracking-wider">
              ESTABLISH_CONNECTION
            </div>

            <form ref={form} onSubmit={sendEmail} className="space-y-5">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="block font-mono text-xs text-terminal-green/70 uppercase tracking-wider">
                    SENDER_NAME
                  </label>
                  <Input
                    type="text"
                    name="user_name"
                    className="terminal-input w-full bg-transparent border-none border-b border-terminal-green text-terminal-green font-mono text-sm md:text-base px-0 py-2 focus:border-terminal-green focus:border-b-2 focus:outline-none focus:shadow-[0_2px_10px_rgba(54,166,137,0.3)]"
                    placeholder=""
                    required
                  />
                </div>

                <div className="space-y-2">
                  <label className="block font-mono text-xs text-terminal-green/70 uppercase tracking-wider">
                    SENDER_EMAIL
                  </label>
                  <Input
                    type="email"
                    name="user_email"
                    className="terminal-input w-full bg-transparent border-none border-b border-terminal-green text-terminal-green font-mono text-sm md:text-base px-0 py-2 focus:border-terminal-green focus:border-b-2 focus:outline-none focus:shadow-[0_2px_10px_rgba(54,166,137,0.3)]"
                    placeholder=""
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block font-mono text-xs text-terminal-green/70 uppercase tracking-wider">
                  MESSAGE_CONTENT
                </label>
                <Textarea
                  name="message"
                  className="terminal-input w-full bg-transparent border-none border-b border-terminal-green text-terminal-green font-mono text-sm md:text-base px-0 py-2 min-h-[220px] resize-none focus:border-terminal-green focus:border-b-2 focus:outline-none focus:shadow-[0_2px_10px_rgba(54,166,137,0.3)]"
                  placeholder=""
                  required
                />
              </div>

              <div className="flex flex-col md:flex-row md:items-center gap-3 pt-2">
                <Button
                  type="submit"
                  disabled={isSending}
                  className="px-6 py-3 border border-terminal-green bg-terminal-green text-black font-mono text-sm uppercase tracking-wider hover:bg-terminal-green/80 transition-all duration-300 shadow-glow-sm disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSending ? '[⚡] TRANSMITTING...' : '[&gt;] TRANSMIT_MESSAGE'}
                </Button>

                <div className="flex items-center gap-2 font-mono text-xs text-terminal-green">
                  <span className="uppercase tracking-wider text-terminal-green/70">STATUS:</span>
                  <span className="flex items-center gap-1">
                    {status === 'READY' && (
                      <>
                        <span className="text-terminal-green animate-pulse">[●]</span>
                        <span>READY_TO_SEND</span>
                      </>
                    )}
                    {status === 'SENDING' && (
                      <>
                        <span className="text-terminal-warning animate-pulse">[◆]</span>
                        <span>SENDING...</span>
                      </>
                    )}
                    {status === 'SENT' && (
                      <>
                        <span className="text-terminal-green">[✓]</span>
                        <span>TRANSMISSION_SUCCESS</span>
                      </>
                    )}
                    {status === 'ERROR' && (
                      <>
                        <span className="text-terminal-danger animate-pulse">[✗]</span>
                        <span>TRANSMISSION_FAILED</span>
                      </>
                    )}
                  </span>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>

      {/* Success Modal */}
      {isSuccess && (
        <div className="fixed inset-0 bg-black/95 flex flex-col justify-center items-center z-50">
          <div className="border-2 border-terminal-green bg-terminal-dark/50 p-8 shadow-glow max-w-md text-center">
            <div className="font-mono text-2xl text-terminal-green mb-4 uppercase tracking-wider">
              [✓] MESSAGE TRANSMITTED
            </div>
            <div className="font-mono text-sm text-terminal-green/80">
              MESSAGE SENT SUCCESSFULLY!
            </div>
            <div className="font-mono text-xs text-terminal-green/60 mt-2">
              FORM WILL BE CLEARED SHORTLY.
            </div>
          </div>
        </div>
      )}
    </section>
  )
}

export default Talk
