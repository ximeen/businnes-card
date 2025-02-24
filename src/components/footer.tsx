export function Footer() {
	return (
		<div className="flex items-end justify-center my-10">
			<span className="text-sm text-muted-foreground w-1/2 text-center py-6">
				&copy; {new Date().getFullYear()} Oren Refrigeração - Todos os direitos
				reservados!
			</span>
		</div>
	);
}

