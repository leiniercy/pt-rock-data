import classNames from 'classnames'

const InputField = ({ className, label, placeholder, type, register, disabled = false, name, error }) => (
  <div className={classNames('mb-4 text-gray-900 ', className)}>
    <label htmlFor={name} className='block font-poppins mb-2'>
      {label}
    </label>
    <input
      type={type}
      id={name}
      {...register(name)}
      disabled={disabled}
      placeholder={placeholder}
      className='w-full p-2 border border-gray-50 rounded-md focus:outline-none focus:ring focus:ring-primary'
    />
    {error && (
      <span className='text-[12px] text-left text-wine font-ibm font-normal leading-[120%]'>
        {error.message}
      </span>
    )}
  </div>
)

export default InputField
