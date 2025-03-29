function LoadingPage() {
	return (
		<div className="flex items-center justify-center min-h-screen ">
			<div className="text-center">
				{/* Spinner */}
				<div className="spinner-border animate-spin inline-block w-20 h-20 border-4 border-foreground border-t-primary rounded-full"></div>
				{/* Loading Text */}
				<p className="mt-4 text-2xl font-medium text-foreground">Loading...</p>
			</div>
		</div>
	);
}

export default LoadingPage;
